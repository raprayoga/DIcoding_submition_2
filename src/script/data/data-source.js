
function dataSource(nama, negara) {
    
  $.ajax({
      url: `http://universities.hipolabs.com/search?country=${negara}&name=${nama}`,
      type: 'get',
      dataType: 'json',
      success: function(data) {
        console.log(data);
        $('#list').html("")
        if (data.length === 0) {
          $('#list').append("<h2> DATA NOT FOUND </h2>")
        } else {
          data.forEach(kampus => {
            $('#list').append(`
            <div class="card" style="width: 13rem;">
              <div class="card-body">
                <h5 class="card-title">${kampus.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${kampus.country}</h6>
                <a href="${kampus.web_pages[0]}" class="card-link" target="blank">kunjungi website kampus</a>
              </div>
            </div>
            `)
          });
        }
      }
  });
}

export default dataSource;