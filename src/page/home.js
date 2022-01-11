import banner from "../components/banner";
import newss from "../components/news";

const homepage = {
    render() {
        return /* html */ `
        <div class="banner">
            ${banner.render()}
        </div>
        <div class="content">
            ${newss.render()}
        </div>
        `;
    },
};
export default homepage;
