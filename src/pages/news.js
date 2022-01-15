import NewList from "../components/newsList";
import Header from "../components/header";
import Footer from "../components/footer";
const NewsPage = {
    render(){
        return `
        ${Header.render()}
        ${NewList.render()}
        ${Footer.render()}
        `
    },
};
export default NewsPage;