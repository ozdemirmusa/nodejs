var express=require("express");
var router=express.Router();
var db=require("./db.js");

router.get("/liste",function (req,res) {
	db.query("SELECT * FROM nott",function(err,result){
			if(err)
						res.send("hata"+err);
								console.log(JSON.stringify(result));
		res.send(JSON.stringify(result));
			});
						});
router.post("/ekle",function(req,res){
	var ad=req.body.ad;
	var mesaj=req.body.mesaj;
	var tarih=req.body.tarih;
	console.log(ad);
	//var mesaj=req.body.mesaj;
	db.query("insert into nott(ad,mesaj,tarih) values(?,?,?)",[ad,mesaj,tarih],function(err,result){
		if (err) {
			res.send("mesaj kayıt hatası"+err);
		}
		console.log(result);
		res.send(result);


	})

});

router.delete("/sil/:id",function(req,res) {
	var id=req.params.id;
	db.query("DELETE FROM nott WHERE id = ?",[id],function(err,result){

		if(err)
			return res.send("not silerken hata oluştu"+err);
	});
	return res.send("oldu");
});

router.get("/sec/:id",function(req,res) {
	console.log("edite geldi");
	var id=req.params.id;
	db.query("SELECT * FROM nott WHERE id = ?",[id],function(err,result){

		if(err)
			return res.send("not silerken hata oluştu"+err);
		console.log("veri"+ JSON.stringify(result));
		 res.json(result);
	});
	
});
	 
router.put("/duzenle/:id",function(req,res){
	var id=req.params.id;
	var ad=req.body.ad;
	var mesaj=req.body.mesaj;
	var tarih=req.body.tarih;
	//var tarih=req.body.tarih;
	console.log(id);
	//var mesaj=req.body.mesaj;
	db.query("update nott set ad=?,mesaj=?,tarih=? where id=?",[ad,mesaj,tarih,id],function(err,result){
		if (err) {
			res.send("düzenleme hatası"+err);
		}
		console.log("hata"+JSON.stringify(result));
		res.send(result);


	})

});
module.exports=router;