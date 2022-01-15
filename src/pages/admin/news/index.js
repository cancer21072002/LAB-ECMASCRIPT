import NavAdmin from "../../../components/NavAdmin";
import data from "../../../data";
const AdminNewsPage = {
    render() {
        return/* html */`
        <div class="min-h-full">
            ${NavAdmin.render()}
            <header class="bg-white shadow">
             <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <div class="max-w-7xl mx-auto">
                    <div class="lg:flex lg:items-center lg:justify-between">
                    <div class="flex-1 min-w-0">
                    <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                      QUẢN LÍ TIN TỨC
                    </h2>
                 <div class="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
                 </div>
               </div>
              <div class="mt-5 flex lg:mt-0 lg:ml-4">
                <a href="/admin/news/add" class="sm:ml-3">
              <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                 <svg class="-ml-1 mr-2 h-5 w-5" x-description="Heroicon name: solid/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                   Thêm mới
                  </button>
                 </a>  
              </div>
           </div>
    
            </div>
            </div>
             </header>
               <main>
              <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div class="px-4 py-6 sm:px-0">
               <div class="border-4 border-dashed border-gray-200 rounded-lg h-96">
               <div class="flex flex-col">
  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
      <table class="min-w-full divide-y divide-gray-200">
      <thead class="bg-gray-50">
      <tr>
      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
      Img
      </th>
      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
      Title
      </th>
      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
      Desc
      </th>
      </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
           ${data.map((post) => `
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                <img src="${post.img}" alt="">
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
              </div>
              <div class="">
                ${post.title}
              </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
              <p>${post.desc}</p>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href="/admin/news/edit/${post.id}" class="text-indigo-600 hover:text-indigo-900">Sửa</a>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href="#" class="text-indigo-600 hover:text-indigo-900">Xóa</a>
              </td>
            `).join("")}
            </tr>
          </tbody>
        </table>
        
        
      </div>
    </div>
  </div>
</div>
               </div>
              </div>
              </div>
                </main>
             </div>   
        
        `;
    },
};
export default AdminNewsPage;


