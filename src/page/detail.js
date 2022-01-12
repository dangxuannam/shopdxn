import data from "../data";

const DetailPage = {
    render(id) {
        const result = data.find((post) => post.id === id);
        return `
        <div>
                <h1>${result.title}</h1>
                <img src="${result.img}" alt="" />
                <p>${result.dect}</p>
            </div>
        `;
    },
};
export default DetailPage;
