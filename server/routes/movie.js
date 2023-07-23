const router = require('express').Router();
const Movie = require('../Models/movie');
const movies = require('../Config/movies')

router.get("/movies",async(req,res)=>{
    try {
        const page = parseInt(req.query.page) || 0;
        const limit = parseInt(req.query.limit) || 5;
        const search = req.query.search || "";
        let sort = req.query.sort || "rating";
        let genre = req.query.genre || "All";

        const genreOptions = [
			"Action",
			"Romance",
			"Fantasy",
			"Drama",
			"Crime",
			"Adventure",
			"Thriller",
			"Sci-fi",
			"Music",
			"Family",
		];

        genre === "All"
			? (genre = [...genreOptions])
			: (genre = req.query.genre.split(","));

        req.query.sort ? (sort = req.query.sort.split(',')) : sort = [sort];

        let sortBy = {};
        if(sort[1]){
            sortBy[sort[0]] = sort[1];
        }
        else{
            sortBy[sort[0]];
        }

        const movies = await Movie.find({name:{$regex:search,$options:"i"}}).where("genre").in([...genre]).sort(sortBy).skip(page*limit).limit(limit);

        const count = await Movie.countDocuments({
            name:{$regex:search,$options:'i'},
            genre:{$in:[...genre]}
        });

        res.status(200).json({
            error:false,
            count:count,
            page:page+1,
            limit:limit,
            genres:genreOptions,
            movies:movies
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({error:true,message:"Internal Server Error"});
    }
});

// const insertMovies = async ()=>{
//     try {
//         const docs = await Movie.insertMany(movies);
//         return Promise.resolve(docs);
//     } catch (error) {
//         return Promise.reject(error);
//     }
// }

// insertMovies()
//     .then(docs => console.log(docs))
//     .catch(err => console.log(err));

module.exports = router;