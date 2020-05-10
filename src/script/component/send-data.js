const sendData = () => {
  let namaKampus = $('#nama').val();
  let negaraTujuan = $('#negara').val();
  localStorage.setItem('nama-kampus', namaKampus);
  localStorage.setItem('negara-tujuan', negaraTujuan);
}

const getData = 
  $("#nama").attr('value', localStorage.getItem('nama-kampus'));
  $("#negara").attr('value', localStorage.getItem('negara-tujuan'));

export {sendData, getData};