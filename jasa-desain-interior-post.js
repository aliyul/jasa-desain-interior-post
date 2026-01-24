
//SUB MAPPING JasaDesainInteriorPost 
const urlMappingJasaDesainInterior = {
 "https://www.betonjayareadymix.com/2018/09/jasa-desain-interior-custom.html": "Jasa Desain Interior Custom",
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
    		/* ==========================================================
   🧩 HybridDateModified v2.5 — StableHash + Safe Load Order
   Fitur:
   - Menjamin detect-evergreen.js dimuat lebih dulu
   - Update <meta dateModified> hanya jika URL terdaftar
   - Stable hash → hasil dateModified konsisten
   ========================================================== */
(async function runHybridDateModified() {
  try {
    // --- helper untuk load eksternal JS secara promise ---
    function loadExternalJSAsync(src) {
      return new Promise((resolve, reject) => {
        const s = document.createElement("script");
        s.src = src;
        s.async = true;
        s.onload = () => resolve(src);
        s.onerror = () => reject(new Error("Gagal load " + src));
        document.head.appendChild(s);
      });
    }

    // --- loader evergreen JS dengan sessionStorage (anti 429) ---
    async function loadEvergreenScript() {
      const KEY = "evergreenScriptLoaded";

      const needReload =
        !sessionStorage.getItem(KEY) ||
        !window.AEDMetaDates ||
        !window.detectEvergreenReady;

      if (!needReload) {
        console.log("⚡ detect-evergreen.js sudah aktif & variable ready — SKIP load");
      } else {
        console.log("⏳ load detect-evergreen.js dari GitHack…");
        try {
          await loadExternalJSAsync(
            "https://raw.githack.com/aliyul/solution-blogger/main/detect-evergreen.js"
          );
          window.detectEvergreenReady = true;
          sessionStorage.setItem(KEY, "true");
          console.log("✅ detect-evergreen.js LOADED & READY");
        } catch (err) {
          console.error("❌ Gagal load detect-evergreen.js", err);
          sessionStorage.removeItem(KEY);
        }
      }

      // --- ALWAYS run evergreen check tiap halaman ---
      if (typeof window.runEvergreenCheck === "function") {
        console.log("🔁 Running evergreen check for this page...");
        window.runEvergreenCheck();
      } else if (typeof window.detectEvergreen === "function") {
        // fallback jika runEvergreenCheck tidak ada
        console.log("🔁 fallback: running detectEvergreen() directly...");
        window.detectEvergreen();
      } else {
        console.warn("⚠️ runEvergreenCheck / detectEvergreen tidak ditemukan!");
      }
    }

    // === PANGGIL LOADER ===
    await loadEvergreenScript();

  } catch (err) {
    console.error("[HybridDateModified] Fatal error:", err);
  }
})();


/*
(async function runHybridDateModified() {
  try {
    // --- helper untuk load eksternal JS secara promise ---
    function loadExternalJSAsync(src) {
      return new Promise((resolve, reject) => {
        const s = document.createElement("script");
        s.src = src;
        s.async = true;
        s.onload = () => resolve(src);
        s.onerror = () => reject(new Error("Gagal load " + src));
        document.head.appendChild(s);
      });
    }

	
     // --- loader evergreen JS dengan sessionStorage (anti 429) ---
    async function loadEvergreenScript() {
      const KEY = "evergreenScriptLoaded";

      const needReload =
        !sessionStorage.getItem(KEY) ||
        !window.AEDMetaDates ||
        !window.detectEvergreenReady;

      if (!needReload) {
        console.log("⚡ detect-evergreen.js sudah aktif & variable ready — SKIP load");
      } else {
        console.log("⏳ load detect-evergreen.js dari GitHack…");
        try {
          await loadExternalJSAsync(
            "https://raw.githack.com/aliyul/solution-blogger/main/detect-evergreen.js"
          );
          window.detectEvergreenReady = true;
          sessionStorage.setItem(KEY, "true");
          console.log("✅ detect-evergreen.js LOADED & READY");
        } catch (err) {
          console.error("❌ Gagal load detect-evergreen.js", err);
          sessionStorage.removeItem(KEY);
        }
      }

      // --- ALWAYS run evergreen check tiap halaman ---
      if (typeof window.runEvergreenCheck === "function") {
        console.log("🔁 Running evergreen check for this page...");
        window.runEvergreenCheck();
      } else {
        console.warn("⚠️ runEvergreenCheck tidak ditemukan!");
      }
    }
	  
    // --- validasi URL terdaftar ---
    if (!urlMappingJasaDesainInterior[cleanUrlJasaDesInPost]) {
      console.log(`[HybridDateModified] URL tidak terdaftar: ${cleanUrlJasaDesInPost}`);
      return;
    }
   
  // === Tanggal nextUpdate1 global ===
	const globalNextUpdate1 = "2026-02-26T00:00:00.000Z";
	console.log(`🌐 [AutoMeta] Detected jasa-desain-interior-post: ${cleanUrlJasaDesInPost}`);

    // --- pastikan meta nextUpdate1 ada ---
    let metaNextUpdate1 = document.querySelector('meta[name="nextUpdate1"]');
    if (!metaNextUpdate1) {
      metaNextUpdate1 = document.createElement("meta");
      metaNextUpdate1.setAttribute("name", "nextUpdate1");
      metaNextUpdate1.setAttribute("content", globalNextUpdate1);
      document.head.appendChild(metaNextUpdate1);
      console.log(`🆕 [AutoMeta] Meta nextUpdate1 ditambahkan → ${globalNextUpdate1}`);
    } else {
      console.log("✅ [AutoMeta] Meta nextUpdate1 sudah ada, tidak dibuat ulang.");
    }

    // --- pastikan detect-evergreen.js selesai dimuat ---
    await loadEvergreenScript();
    console.log("✅ detect-evergreen.js selesai dimuat.");

    // --- pastikan AEDMetaDates sudah tersedia ---
    if (!window.AEDMetaDates || !window.AEDMetaDates.dateModified) {
      console.warn("[HybridDateModified] AEDMetaDates tidak ditemukan, skip update.");
      return;
    }

    const { dateModified, nextUpdate, type } = window.AEDMetaDates;

    // 🔒 Stable hash untuk variasi waktu stabil
    function stableHash(str) {
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash |= 0;
      }
      return Math.abs(hash);
    }

    const hash = stableHash(cleanUrlJasaDesInPost);
    const offsetSeconds = hash % 86400;
    const finalDate = new Date(new Date(dateModified).getTime() + offsetSeconds * 1000);
    const isoDate = finalDate.toISOString();

    // 🧱 Update meta dateModified
    [
      ['meta[itemprop="dateModified"]', 'itemprop', 'dateModified'],
      ['meta[name="dateModified"]', 'name', 'dateModified'],
      ['meta[property="article:modified_time"]', 'property', 'article:modified_time']
    ].forEach(([selector, attr, val]) => {
      let meta = document.querySelector(selector);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attr, val);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", isoDate);
    });

    console.log(`✅ [HybridDateModified v2.5] ${cleanUrlJasaDesInPost} → ${isoDate} | type=${type || "-"}`);

    // 🧩 Perbarui schema jika ada
    const schemaEl = document.querySelector('script[data-schema="evergreen-maintenance"]');
    if (schemaEl) {
      try {
        const data = JSON.parse(schemaEl.textContent.trim());
        data.dateModified = isoDate;
        if (data.maintenanceSchedule) data.maintenanceSchedule.scheduledTime = nextUpdate;
        schemaEl.textContent = JSON.stringify(data, null, 2);
        console.log(`🔄 Schema maintenance diperbarui → dateModified: ${isoDate}`);
      } catch (err) {
        console.error("❌ Gagal update schema:", err);
      }
    }

  } catch (err) {
    console.error("[HybridDateModified] Fatal error:", err);
  }
})();
*/	

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
	   removeCondition('ProdukKonsDindingModularPost');
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
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Desain Interior",
                   "item": "https://www.betonjayareadymix.com/p/jasa-desain-interior.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
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
