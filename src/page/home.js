import Header from "../components/header";
import Footer from "../components/footer";
import banner from "../components/banner";
import newss from "../components/news";

const homepage = {
    render() {
        return /* html */ `
        <header>
        ${Header.render()}
        </header>
        
        <div class="banner">
            ${banner.render()}
        </div>
        <div class="content">
            ${newss.render()}
        </div>
        <footer>
        ${Footer.render()}
        </footer>   
        `;
    },
};
export default homepage;
