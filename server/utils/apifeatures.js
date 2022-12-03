class ApiFeature {
    constructor(query, queryStr){
        this.query;
        this.queryStr
    }
    search(){
        const keyword = this.queryStr.keyword ? 
        {
            title: {
                $regex: this.queryStr.keyword,
                $options: "i"
            }
        } :
        null;
        console.log(keyword);
        this.query = this.query.find({...keyword})
        return this;
    }
}

module.exports = ApiFeature;