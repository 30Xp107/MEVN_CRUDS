const express = require('express');
const postRoutes = express.Router();

let Post = require('./post.model.js');

postRoutes.route('/add').post(function (req, res) {
    let post = new Post(req.body);
    post.save()
        .then(() => {
            res.status(200).json({'business': 'business is added successfully'});
        })
        .catch(()=> {
            res.status(400).send("unable to save to database");
        });
});

postRoutes.route('/').get(function (req, res) {
    Post.find(function(err, posts){
        if(err){
            res.json(err);
        }
        else{
            res.json(posts);
        }
    });
});

postRoutes.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    Post.findById(id, function (err, post){
        if(err){
            res.json(err);
        }
        res.json(post);
    });
});

postRoutes.route('/update/:id').post(function (req, res) {
    Post.findById(req.params.id, function(err, post) {
        if(!post)
            res.status(404).send("data is not found");
        else{
            post.title = req.body.title;
            post.body = req.body.body;
            post.save().then(() => {
                res.json('Update complete');
            })
            .catch(() => {
                res.status(400).send("unable to update the database");
            });
        }
    });
});

postRoutes.route('/delete/:id').delete(function (req, res) {
    Post.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = postRoutes;