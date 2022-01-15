import Banner from "../components/banner";
import NewList from "../components/newsList";
import Header from "../components/header";
import Footer from "../components/footer";

const HomePage = { 
    render(){
        return /* html */`
            ${Header.render()}
            <div class="banner">
                ${Banner.render()}
            </div>
            <div>
                ${NewList.render()}
            </div>
            ${Footer.render()}
        `;
    },
};
export default HomePage;