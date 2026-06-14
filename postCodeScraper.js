//Scanning postcodes from https://www.kodypocztowe.info/lodz
async function scrapeAndExportCSV(baseUrl) {
    let currentPage = 1;
    let hasMoreData = true;
    const allRows = [];
    const headers = ["Kod", "Miejscowość", "Dzielnica", "Ulica", "Numery", "Gmina", "Powiat", "Województwo"];

    console.log("Starting scraping process...");

    while (hasMoreData) {
        // Handle URL pattern: first page is base, others are /page:n
        const url = currentPage === 1 ? baseUrl : `${baseUrl}/page:${currentPage}`;
        
        try {
            const response = await fetch(url);
            
            // Stop if server returns 404/Error
            if (!response.ok) {
                console.log(`Pagination ended. Server status: ${response.status}`);
                hasMoreData = false;
                break;
            }

            const html = await response.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');

            // Find rows that contain actual data (excluding header and ad rows)
            const rows = Array.from(doc.querySelectorAll('.table_postcodes table tr'))
                              .filter(tr => tr.querySelector('td:not(.noborder)'));

            if (rows.length === 0) {
                console.log("No more data rows found. Ending loop.");
                hasMoreData = false;
                break;
            }

            // Extract text from each cell
            rows.forEach(row => {
                const rowData = Array.from(row.querySelectorAll('td'))
                                     .slice(0, 8) // Get the 8 main data columns
                                     .map(td => `"${td.innerText.trim().replace(/"/g, '""')}"`); // Escape quotes
                allRows.push(rowData);
            });

            console.log(`Scraped page ${currentPage}...`);
            currentPage++;
            
            // Safety throttle
            await new Promise(r => setTimeout(r, 600));

        } catch (error) {
            console.error("Fetch error:", error);
            hasMoreData = false;
        }
    }

    // Generate CSV and trigger download
    if (allRows.length > 0) {
        const csvContent = [
            "\ufeff" + headers.map(h => `"${h}"`).join(','), 
            ...allRows.map(row => row.join(','))
        ].join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "kody_pocztowe_complete.csv";
        link.click();
        
        console.log(`Finished! Scraped ${allRows.length} records. CSV downloaded.`);
    } else {
        console.log("No data was found to export.");
    }
}

// Run the script
scrapeAndExportCSV('https://www.kodypocztowe.info/lodz');