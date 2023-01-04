
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://lawa:lawa1234@cluster0.gfs5pb3.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(async err => {
    const collection = client.db("sample_airbnb").collection("listingsAndReviews");
    // perform actions on the collection object

    const pipeline = [
        {
            '$match': {
                'accommodates': {
                    '$gt': 4
                },
                'price': {
                    '$lt': 500
                },
                'amenities': 'Kitchen'
            }
        }, {
            '$sort': {
                'price': 1
            }
        }, {
            '$project': {
                'name': 1,
                'amenities': 1,
                'price': 1,
                'images': 1
            }
        }, {
            '$limit': 5
        }
    ]

    const agg = await collection.aggregate(pipeline).toArray();

    console.log(agg);
    client.close();
});
