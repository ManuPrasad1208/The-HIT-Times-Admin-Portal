const mongoose = require("mongoose")

const matchPostSchema = new mongoose.Schema(
    {

        firebase_match_id: {
            type: String,
            required: true
        },

        timeline: [
            {
                timeline_date: {
                    type: Date
                },
                msgHtml: {
                    type: String
                }
            }
        ]

    }, {timestamps: true})


const MatchPost = mongoose.model("matchpost", matchPostSchema)

module.exports = MatchPost;