class ApiFeature {
    constructor(query, queryStr){
        this.query = query;
        this.queryStr = queryStr;
    }
    search(){
        const keyword = this.queryStr.keyword ? 
        {
            title: {
                $regex: this.queryStr.keyword,
                $options: "i"
            }
        } :
        {};
        // console.log(keyword);
        // console.log("I'm query ",this.query)
        this.query = this.query.find({...keyword});
        // console.log("Now here ",this.query);
        // console.log(this);
        return this;
    }
    filter(){
        const queryCopy = {...this.queryStr};
        const removeFields = ["keyword","page","limit"];
        removeFields.forEach((key)=> delete queryCopy[key]);
        let queryStr = JSON.stringify(queryCopy);
        queryStr = queryStr.replace(/\b(gt|gte|le|lte)\b/g, (key) => `$${key}`);
        // console.log(queryCopy);
        // console.log(queryStr);
        this.query = this.query.find(JSON.parse(queryStr));
        return this;
    }
    pagination(itemperpage){
        const currentPage = Number(this.queryStr.page) || 1;
        const skip = itemperpage * (currentPage - 1);
        this.query = this.query.limit(itemperpage).skip(skip);
        return this;
        
    }
}

module.exports = ApiFeature;