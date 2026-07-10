interface PageInfoModel {
    title: string;
    info: string;
}

function PageInfo(pageData: PageInfoModel) {
  return (
    <div className="mt-1 p-2 bg-primary text-white rounded">
      <h1>{pageData.title}</h1>
      <p>{pageData.info}</p>
    </div>
  );
}

export default PageInfo;
