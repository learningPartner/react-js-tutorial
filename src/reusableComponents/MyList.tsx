interface ListModel {
    listItem: string[]
}

function MyList({listItem}: ListModel) {
    return <ul>
        {
            listItem.map((item: string)=>{
                return  <li>{item}</li>
            })
        }
       
    </ul>
}

export default MyList;