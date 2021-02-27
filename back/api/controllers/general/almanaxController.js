/*
 * Import Module
 ****************/
const cheerio = require('cheerio'),
    axios = require('axios'),
    url = 'http://www.krosmoz.com/fr/almanax?game=dofus',
    fs = require('fs')

/*
 * Controller
 *************/
module.exports = {

    get: (req, res) => {

        var request = require('request');
        request('http://almanax.kasswat.com/', function(error, response, body) {
            if (!error && response.statusCode == 200) {
                var importedJSON = JSON.parse(body);

                res.send({
                    almanax: importedJSON,
                    almanaxDesc: importedJSON.description[0],
                    almanaxBonus: importedJSON.bonus[0],
                    almanaxImg: importedJSON.img
                })
            }
        })


    },
    get2: (req, res) => {

        axios.get(url)
            .then(data => {
                const html = data.data;
                const $ = cheerio.load(html);
                let items = $("#almanax_boss")
                let listArr = [];

                items.each(function() {
                    const obj = {
                        title: $(this).find('.title').text(),
                        img: $('#almanax_boss_image').find('img').attr('src'),
                        content: $(this).text().substring(45, 2000),
                        content2: $('.more-infos-content').find('p').text().substring(16, 100),
                        img2: $('.more-infos-content').find('img').attr('src')
                    }
                    listArr.push(obj)
                });

                // Json parse text
                const valueArray = JSON.stringify(listArr, null, 2)

                listArr.forEach(r => {

                    res.send({ almanax2: r })

                })


            })

    }

}