const Header = {
  render() {
    return /* html */`
      <div class="bg-blue-900 py-[20px]">
      <a href=""><img class="w-[200px] h-[100px] m-auto"
          src="https://phothongcaodang.fpt.edu.vn/wp-content/uploads/LOGO-PTC%C4%90-White-Transparency.png"
          alt=""></a>
      </div>
      <div class="bg-amber-500 py-[10px] flex">
      <ul class="flex">
        <li class="block px-[15px] text-gray-50 hover:text-[black]"><a href="/">Trang chủ</a></li>
        <li class="block px-[15px] text-gray-50 hover:text-[black]"><a href="/tuyensinh">Tuyển sinh</a></li>
        <li class="block px-[15px] text-gray-50 hover:text-[black]"><a href="/ctdt">Chương trình đào tạo</a></li>
      </ul>
      <div class="ml-[100x] ">
        <input type="text">
        <button class="bg-cyan-800 text-gray-50 border-solid border-2 border-white px-[15px]">Tìm kiếm</button>
      </div>
      <ul class="flex">
        <li class="block pl-[40px] text-gray-50 hover:text-[black]"><a href="/signup">Đăng nhập</a></li>
        <li class="block px-[10px] text-gray-50 hover:text-[black]"><a href="/signin">Đăng ký</a></li>
        <li class="block text-gray-50 hover:text-[black]"><a href="/admin/dashboard">Dashboard</a></li>
      </ul>
      </div>
    `;
  },
};
export default Header;