import data from "../data";

const NewList = {
  render() {
    return /* html */`
        <h2 class="font-bold text-xl">TIN TỨC HỌC TẬP</h2>
        <div class="grid grid-cols-3 gap-8 py-[20px] ">
        ${data.map((post) => `
          <div class="border-solid border-2 border-zinc-300 p-[25px] hover:border-zinc-500">
            <a href="/news/${post.id}">
              <img src="${post.img}" alt="">
            </a>
            <h3 class="text-red-800 text-lg my-[8px] font-semibold"><a href="/news/${post.id}">${post.title}</a></h3>
            <p>${post.desc}</p> 
            </div>
          `).join("")}
        </div>
        <h2 class="font-bold text-xl">HOẠT ĐỘNG SINH VIÊN</h2>
        <div class="grid grid-cols-3 gap-8 py-[20px] ">
        ${data.map((post) => `
          <div class="border-solid border-2 border-zinc-300 p-[25px] hover:border-zinc-500">
            <a href="/news/${post.id}">
              <img
              src="${post.img}"
              alt="">
            </a>
            <h3 class="text-red-800 text-lg my-[8px] font-semibold"><a href="/news/${post.id}">${post.title}</a></h3>
            <p>${post.desc}</p> 
            </div>
          `).join("")}
        </div>
        
    `;
  }, 
};
export default NewList;