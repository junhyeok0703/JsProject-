const API_KEY = `87c812d2ba284501b0dbcbbfbe8730f4`;
let newsList = [];
let totalRsults = 0;
let page = 1;
const pageSize = 10;
let groupSize = 5;
let url = new URL(
  `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${API_KEY}`
);

const getNews = async () => {
  try {
    url.searchParams.set("page", page);
    url.searchParams.set("pageSize", pageSize);
    const response = await fetch(url);
    const data = await response.json(); //객체처럼 생겨서 json을 많이 사용함
    console.log(data);
    if (response.status === 200) {
      if (data.articles.length === 0) {
        throw new Error("NO result for this search");
      }

      newsList = data.articles;
      totalResults = data.totalResults;
      render();
      pagenationRender();
    } else if (response.status === 401) {
      throw new Error(data.message);
    }
  } catch (error) {
    errorRender(error.message);
  }
};

const getLatestNews = async () => {
  url = new URL(
    `http://times-node-env.eba-appvq3ef.ap-northeast-2.elasticbeanstalk.com/top-headlines`
  ); //URL인스턴스로 다양한 함수를 사용가능. (객체가생김)
  getNews();
};

let menus = document.querySelectorAll(".menus button");

menus.forEach((menu) =>
  menu.addEventListener("click", (event) => getnewsbycategory(event))
);

async function getnewsbycategory(event) {
  let category = event.target.textContent.toLowerCase();
  url = new URL(
    `http://times-node-env.eba-appvq3ef.ap-northeast-2.elasticbeanstalk.com/top-headlines?category=${category}`
  ); //URL인스턴스로 다양한 함수를 사용가능. (객체가생김)
  getNews();
}

const getnewByKeyword = async () => {
  const keyword = document.getElementById("search-input").value;
  url = new URL(
    `http://times-node-env.eba-appvq3ef.ap-northeast-2.elasticbeanstalk.com/top-headlines?&q=${keyword}`
  );
  getNews();
};

const render = () => {
  const newsHTML = newsList.map(
    (news) => `  
    <div class="row news">
    <div class="col-lg-4">
        <img class="news-img-size"
            src="${news.urlToImage}"
            alt="사진">
    </div> 
    <div class="col-lg-8">
        <h2>${news.title}</h2>
        <p>
           ${news.description}
        </p>
        <div>
            ${news.source.name} * ${news.publishedAt}
        </div>
    </div>
</div>`
  );
  document.getElementById("news-board").innerHTML = newsHTML.join("");
};

const errorRender = (errormsg) => {
  const errorHTML = `
    <div class="alert alert-danger" role="alert">
    ${errormsg}
    </div>`;
  document.getElementById("news-board").innerHTML = errorHTML;
};
const pagenationRender = () => {
  // totalresult
  //page
  //pagesize
  //groupsize
  //totalpages
  const totalPages = Math.ceil(totalResults / pageSize);
  //pagegroup
  const pageGroup = Math.ceil(page / groupSize);

  //lastPage
  let lastPage = pageGroup * groupSize;
  if (lastPage > totalPages) {
    lastPage = totalPages;
  }
  //firstPage
  const firstPage =
    lastPage - (groupSize - 1) <= 0 ? 1 : lastPage - (groupSize - 1);

  let pagenationHTML = ` <li class="page-item-e">
    <a class="page-link"  onclick="moveToPage(${
      page === 1 ? 1 : page - 1
    })" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
    </a>
</li>`;
  for (let i = firstPage; i <= lastPage; i++) {
    pagenationHTML += ` 
    <li class="page-item ${
      i === page ? "active" : ""
    }"onclick="moveToPage(${i})"><a class="page-link" >${i}</a></li>
     `;
  }
  pagenationHTML += `   
    <li class="page-item-e">
        <a class="page-link" onclick="moveToPage(${
          totalPages < page + 1 ? 1 : page + 1
        })"  aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
        </a>
    </li>`;
  document.querySelector(".pagination").innerHTML = pagenationHTML;
};

const moveToPage = (pageno) => {
  console.log(pageno);
  page = pageno;

  getNews();
};
getLatestNews();

//비동기처리 async 와 await(데이터받을때까지 기다려줌)
