const shops = [
    {
        id:'carrefour',
        name: "Carrefour",
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.8198216439564!2d2.439927351298287!3d48.8616461083298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66d6b357710c5%3A0xd022e73f4653e28c!2sCarrefour%20Drive%20Montreuil%20Coeur%20De%20Ville!5e0!3m2!1sfr!2sfr!4v1668274064354!5m2!1sfr!2sfr',
        type: "supermarket",
        adresse: "5 Rue Franklin",
        horaires : 'Monday 08:30 - 21:00 <br/> Tuesday 08:30 - 21:00 <br/> Wednesday 08:30 - 21:00 <br/> Thursday 08:30 - 21:00 <br/> Friday 08:30 - 21:00 <br/> Saturday 08:30 - 21:00 <br/> Sunday 09:00 - 12:30 <br/>',
        siteWeb : 'https://www.https://www.carrefour.fr/magasin/market-montreuil-coeur-de-ville',
        image : './imageShop/carrefouroutside.jpeg'
        },

    {
        id:'nonante',
        name: "Nonante",
        type: "grocery",
        map : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.7033103319036!2d2.4431293999999983!3d48.8638677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66d5b2e950b31%3A0x8a4ae242cbb95400!2sNonante!5e0!3m2!1sfr!2sfr!4v1668273975504!5m2!1sfr!2sfr',
        adresse: "21 Rue de l’église",
        horaires : 'Monday closed <br/> Tuesday 11AM - 2PM / 4:30PM - 7:30PM <br/> Wednesday 11AM - 2PM / 4:30PM - 7:30PM <br/> Thursday 11AM - 2PM / 4:30PM - 7:30PM <br/> Friday 11AM - 2PM / 4:30PM - 7:30PM <br/> Saturday 10:30AM - 7:30PM <br/> Sunday Closed',
        siteWeb : 'https://www.facebook.com/epicerienonante',
        image : './imageShop/nonante.jpeg'
    },

    {
        id:'storybulle',
        name: "Storybulle",
        type: "Book shop",
        map : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.7031263427493!2d2.44093535129838!3d48.86387120817301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66d5b2e950b31%3A0x3ba2c8cc9fab30cb!2sStorybulle!5e0!3m2!1sfr!2sfr!4v1668273996470!5m2!1sfr!2sfr',
        adresse: "21 Rue de l’église",
        horaires : 'Monday 3:30PM - 7:30PM <br/> Tuesday 10:30AM - 7:30PM <br/> Wednesday 10:30AM - 7:30PM <br/> Thursday 10:30AM - 7:30PM <br/> Friday 10:30AM - 7:30PM <br/> Saturday 10:30AM - 7:30PM <br/> Sunday closed',
        siteWeb : 'https://www.canalbd.net/storybulle',
        image : './imageShop/storybulle.jpeg'
    },

    {
        id:'beersandrecords',
        name: "Beers and Records",
        type: "Record shop, home-made beer merchant",
        map : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.7025861503553!2d2.440645951298365!3d48.8638815081724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66d5ef6d7c0f5%3A0x74563793f9190b!2sBeers%20%26%20Records%20Disquaire%20%2F%20cave%20%C3%A0%20bi%C3%A8res!5e0!3m2!1sfr!2sfr!4v1668274021264!5m2!1sfr!2sfr',
        adresse: "17 Rue de l’église",
        horaires : 'lundi 13:30-21:30 <br/> mardi   13:30–21:30 <br/> mercredi 13:30–21:30 <br/> jeudi 13:30–21:30 <br/> vendredi 13:30–21:30  <br/> samedi 13:30–21:30 <br/> dimanche closed',
        siteWeb : 'https://www.facebook.com/beersandrecords93',
        image : './imageShop/beersandrecordsinside.jpeg'
    },

    {
        id:'grandangle',
        name: "Grand Angle",
        type: "Mall",
        map : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.831920909582!2d2.441471600000003!3d48.86141539999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66d5b90cfde45%3A0xfb34650aa066b5ac!2sCentre%20Commercial%20Grand%20Angle!5e0!3m2!1sfr!2sfr!4v1668274043778!5m2!1sfr!2sfr',
        adresse: "Rue des Lumières",
        horaires : 'Monday 10AM - 7:30PM <br/> Tuesday 10AM - 7:30PM <br/> Wednesday 10AM - 7:30PM <br/> Thursday 10AM - 7:30PM <br/> Friday 10AM - 7:30PM <br/> Saturday 10AM - 7:30PM <br/> Sunday closed',
        siteWeb : 'https://www.montreuil-grandangle.com/',
        image : './imageShop/grandangleoutside.jpeg'
    },

    {
        id:'lebergerac',
        name: "Le Bergerac",
        type: "Bar tobacconist",
        map : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20996.376460360894!2d2.4142159138238193!3d48.866846948302644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66d5b29a02acb%3A0x7b5a6c57f8aa825e!2sStella%20Artois%20Tabac!5e0!3m2!1sfr!2sfr!4v1668274171634!5m2!1sfr!2sfr',
        adresse: "29 Rue de l’église",
        horaires : 'Monday 6:30AM - 8PM <br/> Tuesday 6:30AM - 8PM <br/> Wednesday 6:30AM - 8PM <br/> Thursday 6:30AM - 8PM <br/> Friday 6:30AM - 8PM <br/> Saturday 8AM - 8PM <br/> Sunday 8AM - 1PM',
        siteWeb : 'This shop has no website',
        image : './imageShop/Bergerac.jpeg'
    },
]








function displayShopBulle(idx){
    const shop = shops[idx]
    tippy(`#shop${shop.id}`, {
        allowHTML:true,
        trigger: 'click',
        content:`
        <div class="bg-white p-2 border-2 border-black">
			<div class="border-2 border-gray-500">
			    <iframe src="${shop.map}" width="300" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="tourIFrame"></iframe>
			</div>
			<div class="pt-1 text-center">${shop.name}</div>
           <div class="text-center"> 
           <a href="#${shop.id}" style="text-center">More info</a>
           </div>

		</div>
    
    `})
} 