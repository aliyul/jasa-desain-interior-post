
//SUB MAPPING JasaDesainInteriorPost 
const urlMappingJasaDesainInterior = {
    "https://www.betonjayareadymix.com/2018/09/jasa-desain-interior-dan-furniture.html": "Jasa Desain Interior dan Furniture",
  "https://www.betonjayareadymix.com/2018/09/jasa-desain-interior-furniture.html": "Jasa Desain Interior Furniture",
  "https://www.betonjayareadymix.com/2018/09/jasa-desain-interior-terdekat.html": "Jasa Desain Interior Terdekat",
  "https://www.betonjayareadymix.com/2018/09/jasa-desain-interior-murah.html": "Jasa Desain Interior Murah",
  "https://www.betonjayareadymix.com/2018/11/jasa-desain-interior-depok.html": "Jasa Desain Interior Depok",
  "https://www.betonjayareadymix.com/2018/11/jasa-desain-interior-bogor.html": "Jasa Desain Interior Bogor",
  "https://www.betonjayareadymix.com/2018/11/jasa-desain-interior-bekasi.html": "Jasa Desain Interior Bekasi",
  "https://www.betonjayareadymix.com/2018/11/jasa-desain-interior-jakarta.html": "Jasa Desain Interior Jakarta",
  "https://www.betonjayareadymix.com/2018/11/jasa-desain-interior-tangerang.html": "Jasa Desain Interior Tangerang",

  "https://www.betonjayareadymix.com/2018/09/harga-jasa-desain-interior-rumah.html": "Harga Jasa Desain Interior Rumah",
  "https://www.betonjayareadymix.com/2018/09/jasa-desain-interior-apartemen.html": "Jasa Desain Interior Apartemen",
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-desain-interior-hotel.html": "Harga Jasa Desain Interior Hotel",
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-desain-interior-dapur.html": "Harga Jasa Desain Interior Dapur",
  "https://www.betonjayareadymix.com/2018/09/jasa-desain-interior-kamar.html": "Jasa Desain Interior Kamar",
  "https://www.betonjayareadymix.com/2018/09/jasa-desain-interior-ruangan.html": "Jasa Desain Interior Ruangan",
  "https://www.betonjayareadymix.com/2018/09/harga-desain-interior-kamar-mandi.html": "Harga Desain Interior Kamar Mandi",
  "https://www.betonjayareadymix.com/2018/09/harga-desain-interior-kamar.html": "Harga Desain Interior Kamar",
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-desain-interior-kamar-tidur.html": "Harga Jasa Desain Interior Kamar Tidur",
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-desain-interior-per-meter.html": "Harga Jasa Desain Interior Per Meter",
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-desain-interior-ruang-tamu.html": "Harga Jasa Desain Interior Ruang Tamu",
  "https://www.betonjayareadymix.com/2018/09/jasa-desain-interior-per-m2.html": "Jasa Desain Interior Per M2",
  "https://www.betonjayareadymix.com/2018/09/jasa-interior-desain-terdekat.html": "Jasa Interior Desain Terdekat",
  "https://www.betonjayareadymix.com/2018/09/jasa-interior-desain.html": "Jasa Interior Desain"

};
// Menyimpan elemen yang dihapus dalam variabel
let removedElementsJasaDesInPost = {};
// Fungsi untuk menghapus elemen berdasarkan ID
function removeCondition(conditionId) {
    const conditionElement = document.getElementById(conditionId);

    if (conditionElement) {
        // Menyimpan elemen yang dihapus dalam objek untuk bisa dikembalikan
        removedElementsJasaDesInPost[conditionId] = conditionElement;
        conditionElement.remove(); // Menghapus elemen tersebut
    }
}

// Fungsi untuk mengembalikan elemen yang telah dihapus
function restoreCondition(conditionId) {
    const breadcrumb = document.querySelector('.breadcrumb');
    const elementToRestore = removedElementsJasaDesInPost[conditionId]; // Mendapatkan elemen yang disimpan

    if (elementToRestore) {
        breadcrumb.appendChild(elementToRestore); // Menambahkan elemen kembali ke dalam breadcrumb
        delete removedElementsJasaDesInPost[conditionId]; // Menghapus elemen dari objek setelah dikembalikan
    } else {
        console.log(`Elemen dengan ID ${conditionId} tidak ditemukan di removedElementsJasaCuttingBetonPost.`);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // var currentUrl = window.location.href;
     //const cleanUrl = currentUrl.split('?')[0]; // Menghapus parameter seperti ?m=1
    const cleanUrlJasaDesInPost = window.location.href.split(/[?#]/)[0]; // Menghilangkan parameter seperti ?m=1


     // Menemukan elemen menggunakan Id
    var JasaDesInPost = document.getElementById("JasaDesInPost");

    if (!JasaDesInPost) {
        console.error("elemen Id JasaDesInPost kondisi terhapus");
        return;
    }
    
     var JasaDesainInteriorPostLink = document.getElementById("JasaDesainInteriorPost");
     //var JasaCuttingBetonPostLink = document.getElementById("JasaCuttingBetonPost");/
    	
     var pageNameJasaDesInPost = document.getElementById("pageNameJasaDesInPost");
    

     // Default untuk menyembunyikan elemen
     JasaDesainInteriorPostLink.style.visibility = 'hidden';
     //JasaCuttingBetonPostLink.style.visibility = 'hidden';
	
     pageNameJasaDesInPost.textContent = "";
	
    //SUB urlMappingBangunan
if (urlMappingJasaDesainInterior[cleanUrlJasaDesInPost]) {
      restoreCondition('JasaDesInPost');
       restoreCondition('JasaDesainInteriorPost');
       // restoreCondition('JasaBorAirPost');
     
        //hapus elemen div id lain KECUALI JasaPengeboranPost
        
	     // removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
        removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
	    removeCondition('JasaKonsCuttingBetonPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
	
	 //hapus elemen JasaPengeboranPost SEMUA KECUALI JasaBorAirPost
       /* removeCondition('JasaBorTembokPost');
        removeCondition('JasaBorePilePost');
        removeCondition('JasaCoringBetonPost');
        removeCondition('JasaBorBetonPost');
        removeCondition('JasaBorTanahPost');
        removeCondition('JasaBorHorizontalPost');
       */
	
        JasaDesainInteriorPostLink.style.visibility = 'visible';
       //TAMPILKAN PONDASI BANGUNAN
       // JasaCuttingBetonPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBorAirPost
       // JasaBorAirPostLink.style.visibility = 'visible';
        pageNameJasaDesInPost.textContent = urlMappingJasaDesainInterior[cleanUrlJasaDesInPost];
    }
   // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaDesainInterior[cleanUrlJasaDesInPost]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
               {
                   "@type": "ListItem",
                   "position": 1,
                   "name": "Jasa Desain Interior",
                   "item": "https://www.betonjayareadymix.com/p/jasa-desain-interior.html"
               },
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": urlMappingJasaDesainInterior[cleanUrlJasaDesInPost],
                   "item": cleanUrlJasaDesInPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
   });
