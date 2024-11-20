// Dynamically add content to the sidebar
const sidebar = document.querySelector('.sidebar');
sidebar.innerHTML = `
    <div class="bg-green-200"></div>
    <button class="bg-blue-200 py-2 px-4 mx-4 rounded">Dashboard</button>
    <button class="bg-blue-400 py-2 px-4 mx-4 rounded">Master Barang</button>
    <button class="bg-blue-200 py-2 px-4 mx-4 rounded">Receiving</button>
    <button class="bg-blue-200 py-2 px-4 mx-4 rounded">Issuing</button>
`;

// Add header content
const header = document.getElementById('header');
header.innerHTML = `
    <div></div>
    <div class="flex items-center space-x-2">
        <span>username</span>
        <div class="w-8 h-8 bg-blue-200 rounded-full"></div>
    </div>
`;

// Add search bar
const searchBar = document.getElementById('search-bar');
searchBar.innerHTML = `<button class="bg-yellow-200 py-2 px-4 rounded">Pencarian</button>`;

// Add table content
const tableContainer = document.getElementById('table-container');
tableContainer.innerHTML = `
    <table class="min-w-full bg-white border border-gray-300">
        <thead>
            <tr>
                <th class="border border-gray-300 px-4 py-2">No</th>
                <th class="border border-gray-300 px-4 py-2">Nama Barang</th>
                <th class="border border-gray-300 px-4 py-2">Pengadaan</th>
                <th class="border border-gray-300 px-4 py-2">Stok</th>
                <th class="border border-gray-300 px-4 py-2">Status</th>
                <th class="border border-gray-300 px-4 py-2">Baik</th>
                <th class="border border-gray-300 px-4 py-2">Rusak</th>
            </tr>
        </thead>
        <tbody>
            ${Array(7).fill().map(() => `
                <tr>
                    <td class="border border-gray-300 px-4 py-2"></td>
                    <td class="border border-gray-300 px-4 py-2"></td>
                    <td class="border border-gray-300 px-4 py-2"></td>
                    <td class="border border-gray-300 px-4 py-2"></td>
                    <td class="border border-gray-300 px-4 py-2"></td>
                    <td class="border border-gray-300 px-4 py-2"></td>
                    <td class="border border-gray-300 px-4 py-2"></td>
                </tr>
            `).join('')}
        </tbody>
    </table>
`;

// Add footer content
const footer = document.getElementById('footer');
footer.innerHTML = `
    <span>Copyright</span>
    <span class="float-right">Versi: 10</span>
`;
