const header = {
    render() {
        return /* html */ ` 
        
        <div class="logo text-center bg-sky-900"  >
          <img class="mx-auto" src="https://picsum.photos/100/30" alt="" width="200px">
        </div>
        
        <div class="menu flex justify-between bg-orange-500 ">
          <ul class="flex ">
            <li class="p-4 hover:bg-indigo-500  "><a class="text-white font-semibold border-b-2 " href="/">Trang Chủ   </a> </li>
   
             <li class="p-4 hover:bg-indigo-500 "><a class="text-white font-semibold"  href="/admin/product">Tuyển Sinh   </a> </li>
   
               <li class="p-4 hover:bg-indigo-500 "><a class="text-white font-semibold"  href="/admin/dashboard/">Dashboard  </a> </li>
              
                 <li class="p-4 hover:bg-indigo-500 "><a class="text-white font-semibold"  href="/admin/signin/">Đăng Nhập </a> </li>
   
                   <li class="p-4 hover:bg-indigo-500 "><a class="text-white font-semibold"  href="/admin/signup/">Đăng Kí </a> </li>
   
          </ul>
         
          <div class="search bg-inherit p-4">
            <input  type="text" width="20px">
            <input type="submit" value="Tìm Kiếm">
          </div>
        </div>
        `;
    },
};
export default header;
