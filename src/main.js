import Navigo from "navigo";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import Product from "./pages/product";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import NewsPage from "./pages/news";
import DetailNewsPage from "./pages/detailNews";
import DashBoardPage from "./pages/admin/dashboard";
import AddNewsPage from "./pages/admin/news/add";
import AdminNewsPage from "./pages/admin/news";
import EditPage from "./pages/admin/news/edit";
const router = new Navigo("/", {linksSelector : "a"});

const print = (content) => {
    document.getElementById("app").innerHTML = content;
};

router.on({
    "/": () => {
        print(HomePage.render());
    },
    "/tuyensinh": () => {
        print(AboutPage.render());
    },
    "/ctdt": () => {
        print(Product.render());
    },
    "/signup": () => {
        print(Signup.render());
    },
    "/signin": () => {
        print(Signin.render());
    },
    "/news": () => {
        print(NewsPage.render());
    },
    "/news/:id": ({ data }) => {
        const { id } = data;
        print(DetailNewsPage.render(id));
    },
    "/admin/dashboard": () => {
        print(DashBoardPage.render());
    },
    "/admin/news": () => {
        print(AdminNewsPage.render());
    },
    "/admin/news/add": () => {
        console.log('12');
        print(AddNewsPage.render());
    },
    "/admin/news/edit/:id": ({ data }) => {
        const { id } = data;
        print(EditPage.render(id));
    },
});
router.resolve();
