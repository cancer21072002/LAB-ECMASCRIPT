import data from "../data";
import Header from "../components/header";
import Footer from "../components/footer";

const DetailNewsPage = {
    render(id){
        const result = data.find((post) => post.id === id);
        console.log(result);
        return`
        ${Header.render()}
        <h1 class="font-bold text-xl py-[15px]"> CHI TIẾT BÀI VIẾT </h1>
        <div class="mx-[168px]">
        <img src="${result.img}" />
        <h3 class="text-red-800 text-lg my-[10px] font-semibold ">${result.title}</h3>
        <p class="pb-[35px]">${result.desc}</p>
        </div>
        ${Footer.render()}
        `;
    },
};
export default DetailNewsPage;