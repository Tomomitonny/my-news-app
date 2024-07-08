require("./index.css");
var $2DZvJ$reactjsxruntime = require("react/jsx-runtime");
var $2DZvJ$react = require("react");
var $2DZvJ$reactdomclient = require("react-dom/client");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}








const $7c824abcc8de61bc$var$CategorySelector = ({ selectedCategory: selectedCategory, onSelectCategory: onSelectCategory })=>{
    const categories = [
        "TOP",
        "NEW",
        "BEST"
    ];
    return /*#__PURE__*/ (0, $2DZvJ$reactjsxruntime.jsx)("div", {
        children: categories.map((category)=>/*#__PURE__*/ (0, $2DZvJ$reactjsxruntime.jsx)("button", {
                onClick: ()=>onSelectCategory(category),
                className: selectedCategory === category ? "selected" : "",
                children: category
            }, category))
    });
};
var $7c824abcc8de61bc$export$2e2bcd8739ae039 = $7c824abcc8de61bc$var$CategorySelector;




const $9e2904e989862aa0$var$NewsList = ({ category: category })=>{
    const [newsItems, setNewsItems] = (0, $2DZvJ$react.useState)([]);
    const [loading, setLoading] = (0, $2DZvJ$react.useState)(true);
    (0, $2DZvJ$react.useEffect)(()=>{
        const fetchNews = async ()=>{
            setLoading(true);
            const categoryMap = {
                TOP: "topstories",
                NEW: "newstories",
                BEST: "beststories"
            };
            try {
                const response = await fetch(`https://hacker-news.firebaseio.com/v0/${categoryMap[category]}.json`);
                if (!response.ok) throw new Error("Network response was not ok");
                const newsIds = await response.json();
                const newsIdsSlice = newsIds.slice(0, 10); // 最初の10件を取得
                const newsPromises = newsIdsSlice.map((id)=>fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then((response)=>{
                        if (!response.ok) throw new Error("Network response was not ok");
                        return response.json();
                    }));
                const newsResults = await Promise.all(newsPromises);
                setNewsItems(newsResults);
            } catch (error) {
                console.error("Error fetching news:", error);
            } finally{
                setLoading(false);
            }
        };
        fetchNews();
    }, [
        category
    ]);
    if (loading) return /*#__PURE__*/ (0, $2DZvJ$reactjsxruntime.jsx)("div", {
        children: "Loading..."
    });
    return /*#__PURE__*/ (0, $2DZvJ$reactjsxruntime.jsx)((0, $2DZvJ$reactjsxruntime.Fragment), {
        children: /*#__PURE__*/ (0, $2DZvJ$reactjsxruntime.jsx)("ul", {
            children: newsItems.map((news)=>/*#__PURE__*/ (0, $2DZvJ$reactjsxruntime.jsxs)("li", {
                    children: [
                        /*#__PURE__*/ (0, $2DZvJ$reactjsxruntime.jsx)("p", {
                            children: news.by
                        }),
                        /*#__PURE__*/ (0, $2DZvJ$reactjsxruntime.jsx)("a", {
                            href: news.url,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: news.title
                        })
                    ]
                }, news.id))
        })
    });
};
var $9e2904e989862aa0$export$2e2bcd8739ae039 = $9e2904e989862aa0$var$NewsList;


const $99a81e440beae788$var$App = ()=>{
    const [category, setCategory] = (0, $2DZvJ$react.useState)("TOP");
    return /*#__PURE__*/ (0, $2DZvJ$reactjsxruntime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0, $2DZvJ$reactjsxruntime.jsxs)("header", {
                children: [
                    /*#__PURE__*/ (0, $2DZvJ$reactjsxruntime.jsx)("h1", {
                        children: "My News App"
                    }),
                    /*#__PURE__*/ (0, $2DZvJ$reactjsxruntime.jsx)((0, $7c824abcc8de61bc$export$2e2bcd8739ae039), {
                        selectedCategory: category,
                        onSelectCategory: setCategory
                    })
                ]
            }),
            /*#__PURE__*/ (0, $2DZvJ$reactjsxruntime.jsx)("div", {
                className: "list",
                children: /*#__PURE__*/ (0, $2DZvJ$reactjsxruntime.jsx)((0, $9e2904e989862aa0$export$2e2bcd8739ae039), {
                    category: category
                })
            })
        ]
    });
};
var $99a81e440beae788$export$2e2bcd8739ae039 = $99a81e440beae788$var$App;


const $3f7b2fe5d2c34f8f$var$root = (0, ($parcel$interopDefault($2DZvJ$reactdomclient))).createRoot(document.getElementById("root"));
$3f7b2fe5d2c34f8f$var$root.render(/*#__PURE__*/ (0, $2DZvJ$reactjsxruntime.jsx)((0, ($parcel$interopDefault($2DZvJ$react))).StrictMode, {
    children: /*#__PURE__*/ (0, $2DZvJ$reactjsxruntime.jsx)((0, $99a81e440beae788$export$2e2bcd8739ae039), {})
}));


//# sourceMappingURL=index.js.map
