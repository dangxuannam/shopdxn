import news from "../data";

const newss = {
    render() {
        return /* html */ `
        
        <h2 class="font-semibold mt-2 text-2xl ">Tin Tức Học Tập</h2>
        <div class="grid grid-cols-3 gap-8  ">
         
          ${news.map((post) => `
          <div class="learn border-4 mr-2  ">
            <img class="m-4" src="${post.img}" alt="" width="320px" height="320px">
            <h3 class="m-4 text-orange-500 font-bold"><a href="/product/${post.id}" class="font-semibold text-orange-500 text-lg">${post.title}</a></h3>
            <p class="w-80 m-4">${post.dect}</p>
            </div>
            
          
     `).join("")}  
    
     </div>
          `;
    },
};
export default newss;
