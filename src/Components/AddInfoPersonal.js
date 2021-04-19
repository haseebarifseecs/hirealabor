import React, { useState } from "react";
import { storage } from "../services/firebase";
import HomeNav from "./HomeNav";
import FileUploader from "react-firebase-file-uploader";
import ProfileImage from "./ProfileImage";

function AddInfoPersonal(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.history.push("/addinfoprofessional", {
      fullname,
      language,
      gender,
      description,
      imageUrl,
      location,
    });
  };
  const [fullname, setFullName] = useState("");
  const [language, setLanguage] = useState("");
  const [gender, setGender] = useState("Male");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [imageUrl, setImageUrl] = useState(
    "data:image/png;base64,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"
  );
  const [progress, setProgress] = useState(0);
  const handleUploadStart = () => setProgress(0);
  const handleProgress = (progress) => {
    setProgress(progress);
  };
  const handleLocation = (e) => {
    setLocation(e.target.value);
  };
  const handleFullName = (e) => {
    setFullName(e.target.value);
  };
  const handleLanguage = (e) => {
    console.log(e.target.value);

    setLanguage(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleGender = (e) => {
    setGender(e.target.value);
  };
  const handleUploadSuccess = (filename) => {
    storage
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then((url) => setImageUrl(url));
  };
  return (
    <>
      <HomeNav history={props.history}/>
      <div className="page-wrapper" style={{ width: "90%", margin: "auto" }}>
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Personal Info</h3>
                <p>
                  Tell us a bit about yourself. This information will appear on
                  your public profile, <br></br>so that potential buyers can get
                  to know you better.
                </p>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body custom-edit-service">
                  {/* Add Blog */}
                  <form
                    autoComplete="off"
                    id="update_service"
                    onSubmit={handleSubmit}
                  >
                    <input
                      type="hidden"
                      name="csrf_token_name"
                      defaultValue="0146f123a4c7ae94253b39bca6bd5a5e"
                    />
                    <div className="service-fields mb-3">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label>
                              Full Name <span className="text-danger">*</span>
                            </label>

                            <input
                              className="form-control"
                              type="text"
                              name="service_title"
                              id="service_title"
                              required
                              defaultValue=""
                              onChange={handleFullName}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="service-fields mb-3">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label>
                              Primary Language{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <select
                              onChange={handleLanguage}
                              className="form-control"
                              name="subcategory"
                              value={language}
                            >
                              <option value="English">English</option>
                              <option value="Urdu">Urdu</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="service-fields mb-3">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label>
                              Gender <span className="text-danger">*</span>
                            </label>
                            <select
                              onChange={handleGender}
                              className="form-control"
                              name="subcategory"
                              value={language}
                            >
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="service-fields mb-3">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label>
                              Location <span className="text-danger">*</span>
                            </label>

                            <select
                              className="form-control"
                              name="subcategory"
                              onChange={handleLocation}
                            >
                              <option value="" disabled selected>
                                Select City
                              </option>
                              <option value="Islamabad">Islamabad</option>
                              <option value="" disabled>
                                Punjab Cities
                              </option>
                              <option value="Ahmed Nager Chatha">
                                Ahmed Nager Chatha
                              </option>
                              <option value="Ahmadpur East">
                                Ahmadpur East
                              </option>
                              <option value="Ali Khan Abad">
                                Ali Khan Abad
                              </option>
                              <option value="Alipur">Alipur</option>
                              <option value="Arifwala">Arifwala</option>
                              <option value="Attock">Attock</option>
                              <option value="Bhera">Bhera</option>
                              <option value="Bhalwal">Bhalwal</option>
                              <option value="Bahawalnagar">Bahawalnagar</option>
                              <option value="Bahawalpur">Bahawalpur</option>
                              <option value="Bhakkar">Bhakkar</option>
                              <option value="Burewala">Burewala</option>
                              <option value="Chillianwala">Chillianwala</option>
                              <option value="Chakwal">Chakwal</option>
                              <option value="Chichawatni">Chichawatni</option>
                              <option value="Chiniot">Chiniot</option>
                              <option value="Chishtian">Chishtian</option>
                              <option value="Daska">Daska</option>
                              <option value="Darya Khan">Darya Khan</option>
                              <option value="Dera Ghazi Khan">
                                Dera Ghazi Khan
                              </option>
                              <option value="Dhaular">Dhaular</option>
                              <option value="Dina">Dina</option>
                              <option value="Dinga">Dinga</option>
                              <option value="Dipalpur">Dipalpur</option>
                              <option value="Faisalabad">Faisalabad</option>
                              <option value="Ferozewala">Ferozewala</option>
                              <option value="Fateh Jhang">Fateh Jang</option>
                              <option value="Ghakhar Mandi">
                                Ghakhar Mandi
                              </option>
                              <option value="Gojra">Gojra</option>
                              <option value="Gujranwala">Gujranwala</option>
                              <option value="Gujrat">Gujrat</option>
                              <option value="Gujar Khan">Gujar Khan</option>
                              <option value="Hafizabad">Hafizabad</option>
                              <option value="Haroonabad">Haroonabad</option>
                              <option value="Hasilpur">Hasilpur</option>
                              <option value="Haveli Lakha">Haveli Lakha</option>
                              <option value="Jatoi">Jatoi</option>
                              <option value="Jalalpur">Jalalpur</option>
                              <option value="Jattan">Jattan</option>
                              <option value="Jampur">Jampur</option>
                              <option value="Jaranwala">Jaranwala</option>
                              <option value="Jhang">Jhang</option>
                              <option value="Jhelum">Jhelum</option>
                              <option value="Kalabagh">Kalabagh</option>
                              <option value="Karor Lal Esan">
                                Karor Lal Esan
                              </option>
                              <option value="Kasur">Kasur</option>
                              <option value="Kamalia">Kamalia</option>
                              <option value="Kamoke">Kamoke</option>
                              <option value="Khanewal">Khanewal</option>
                              <option value="Khanpur">Khanpur</option>
                              <option value="Kharian">Kharian</option>
                              <option value="Khushab">Khushab</option>
                              <option value="Kot Addu">Kot Addu</option>
                              <option value="Jauharabad">Jauharabad</option>
                              <option value="Lahore">Lahore</option>
                              <option value="Lalamusa">Lalamusa</option>
                              <option value="Layyah">Layyah</option>
                              <option value="Liaquat Pur">Liaquat Pur</option>
                              <option value="Lodhran">Lodhran</option>
                              <option value="Malakwal">Malakwal</option>
                              <option value="Mamoori">Mamoori</option>
                              <option value="Mailsi">Mailsi</option>
                              <option value="Mandi Bahauddin">
                                Mandi Bahauddin
                              </option>
                              <option value="Mian Channu">Mian Channu</option>
                              <option value="Mianwali">Mianwali</option>
                              <option value="Multan">Multan</option>
                              <option value="Murree">Murree</option>
                              <option value="Muridke">Muridke</option>
                              <option value="Mianwali Bangla">
                                Mianwali Bangla
                              </option>
                              <option value="Muzaffargarh">Muzaffargarh</option>
                              <option value="Narowal">Narowal</option>
                              <option value="Nankana Sahib">
                                Nankana Sahib
                              </option>
                              <option value="Okara">Okara</option>
                              <option value="Renala Khurd">Renala Khurd</option>
                              <option value="Pakpattan">Pakpattan</option>
                              <option value="Pattoki">Pattoki</option>
                              <option value="Pir Mahal">Pir Mahal</option>
                              <option value="Qaimpur">Qaimpur</option>
                              <option value="Qila Didar Singh">
                                Qila Didar Singh
                              </option>
                              <option value="Rabwah">Rabwah</option>
                              <option value="Raiwind">Raiwind</option>
                              <option value="Rajanpur">Rajanpur</option>
                              <option value="Rahim Yar Khan">
                                Rahim Yar Khan
                              </option>
                              <option value="Rawalpindi">Rawalpindi</option>
                              <option value="Sadiqabad">Sadiqabad</option>
                              <option value="Safdarabad">Safdarabad</option>
                              <option value="Sahiwal">Sahiwal</option>
                              <option value="Sangla Hill">Sangla Hill</option>
                              <option value="Sarai Alamgir">
                                Sarai Alamgir
                              </option>
                              <option value="Sargodha">Sargodha</option>
                              <option value="Shakargarh">Shakargarh</option>
                              <option value="Sheikhupura">Sheikhupura</option>
                              <option value="Sialkot">Sialkot</option>
                              <option value="Sohawa">Sohawa</option>
                              <option value="Soianwala">Soianwala</option>
                              <option value="Siranwali">Siranwali</option>
                              <option value="Talagang">Talagang</option>
                              <option value="Taxila">Taxila</option>
                              <option value="Toba Tek Singh">
                                Toba Tek Singh
                              </option>
                              <option value="Vehari">Vehari</option>
                              <option value="Wah Cantonment">
                                Wah Cantonment
                              </option>
                              <option value="Wazirabad">Wazirabad</option>
                              <option value="" disabled>
                                Sindh Cities
                              </option>
                              <option value="Badin">Badin</option>
                              <option value="Bhirkan">Bhirkan</option>
                              <option value="Rajo Khanani">Rajo Khanani</option>
                              <option value="Chak">Chak</option>
                              <option value="Dadu">Dadu</option>
                              <option value="Digri">Digri</option>
                              <option value="Diplo">Diplo</option>
                              <option value="Dokri">Dokri</option>
                              <option value="Ghotki">Ghotki</option>
                              <option value="Haala">Haala</option>
                              <option value="Hyderabad">Hyderabad</option>
                              <option value="Islamkot">Islamkot</option>
                              <option value="Jacobabad">Jacobabad</option>
                              <option value="Jamshoro">Jamshoro</option>
                              <option value="Jungshahi">Jungshahi</option>
                              <option value="Kandhkot">Kandhkot</option>
                              <option value="Kandiaro">Kandiaro</option>
                              <option value="Karachi">Karachi</option>
                              <option value="Kashmore">Kashmore</option>
                              <option value="Keti Bandar">Keti Bandar</option>
                              <option value="Khairpur">Khairpur</option>
                              <option value="Kotri">Kotri</option>
                              <option value="Larkana">Larkana</option>
                              <option value="Matiari">Matiari</option>
                              <option value="Mehar">Mehar</option>
                              <option value="Mirpur Khas">Mirpur Khas</option>
                              <option value="Mithani">Mithani</option>
                              <option value="Mithi">Mithi</option>
                              <option value="Mehrabpur">Mehrabpur</option>
                              <option value="Moro">Moro</option>
                              <option value="Nagarparkar">Nagarparkar</option>
                              <option value="Naudero">Naudero</option>
                              <option value="Naushahro Feroze">
                                Naushahro Feroze
                              </option>
                              <option value="Naushara">Naushara</option>
                              <option value="Nawabshah">Nawabshah</option>
                              <option value="Nazimabad">Nazimabad</option>
                              <option value="Qambar">Qambar</option>
                              <option value="Qasimabad">Qasimabad</option>
                              <option value="Ranipur">Ranipur</option>
                              <option value="Ratodero">Ratodero</option>
                              <option value="Rohri">Rohri</option>
                              <option value="Sakrand">Sakrand</option>
                              <option value="Sanghar">Sanghar</option>
                              <option value="Shahbandar">Shahbandar</option>
                              <option value="Shahdadkot">Shahdadkot</option>
                              <option value="Shahdadpur">Shahdadpur</option>
                              <option value="Shahpur Chakar">
                                Shahpur Chakar
                              </option>
                              <option value="Shikarpaur">Shikarpaur</option>
                              <option value="Sukkur">Sukkur</option>
                              <option value="Tangwani">Tangwani</option>
                              <option value="Tando Adam Khan">
                                Tando Adam Khan
                              </option>
                              <option value="Tando Allahyar">
                                Tando Allahyar
                              </option>
                              <option value="Tando Muhammad Khan">
                                Tando Muhammad Khan
                              </option>
                              <option value="Thatta">Thatta</option>
                              <option value="Umerkot">Umerkot</option>
                              <option value="Warah">Warah</option>
                              <option value="" disabled>
                                Khyber Cities
                              </option>
                              <option value="Abbottabad">Abbottabad</option>
                              <option value="Adezai">Adezai</option>
                              <option value="Alpuri">Alpuri</option>
                              <option value="Akora Khattak">
                                Akora Khattak
                              </option>
                              <option value="Ayubia">Ayubia</option>
                              <option value="Banda Daud Shah">
                                Banda Daud Shah
                              </option>
                              <option value="Bannu">Bannu</option>
                              <option value="Batkhela">Batkhela</option>
                              <option value="Battagram">Battagram</option>
                              <option value="Birote">Birote</option>
                              <option value="Chakdara">Chakdara</option>
                              <option value="Charsadda">Charsadda</option>
                              <option value="Chitral">Chitral</option>
                              <option value="Daggar">Daggar</option>
                              <option value="Dargai">Dargai</option>
                              <option value="Darya Khan">Darya Khan</option>
                              <option value="Dera Ismail Khan">
                                Dera Ismail Khan
                              </option>
                              <option value="Doaba">Doaba</option>
                              <option value="Dir">Dir</option>
                              <option value="Drosh">Drosh</option>
                              <option value="Hangu">Hangu</option>
                              <option value="Haripur">Haripur</option>
                              <option value="Karak">Karak</option>
                              <option value="Kohat">Kohat</option>
                              <option value="Kulachi">Kulachi</option>
                              <option value="Lakki Marwat">Lakki Marwat</option>
                              <option value="Latamber">Latamber</option>
                              <option value="Madyan">Madyan</option>
                              <option value="Mansehra">Mansehra</option>
                              <option value="Mardan">Mardan</option>
                              <option value="Mastuj">Mastuj</option>
                              <option value="Mingora">Mingora</option>
                              <option value="Nowshera">Nowshera</option>
                              <option value="Paharpur">Paharpur</option>
                              <option value="Pabbi">Pabbi</option>
                              <option value="Peshawar">Peshawar</option>
                              <option value="Saidu Sharif">Saidu Sharif</option>
                              <option value="Shorkot">Shorkot</option>
                              <option value="Shewa Adda">Shewa Adda</option>
                              <option value="Swabi">Swabi</option>
                              <option value="Swat">Swat</option>
                              <option value="Tangi">Tangi</option>
                              <option value="Tank">Tank</option>
                              <option value="Thall">Thall</option>
                              <option value="Timergara">Timergara</option>
                              <option value="Tordher">Tordher</option>
                              <option value="" disabled>
                                Balochistan Cities
                              </option>
                              <option value="Awaran">Awaran</option>
                              <option value="Barkhan">Barkhan</option>
                              <option value="Chagai">Chagai</option>
                              <option value="Dera Bugti">Dera Bugti</option>
                              <option value="Gwadar">Gwadar</option>
                              <option value="Harnai">Harnai</option>
                              <option value="Jafarabad">Jafarabad</option>
                              <option value="Jhal Magsi">Jhal Magsi</option>
                              <option value="Kacchi">Kacchi</option>
                              <option value="Kalat">Kalat</option>
                              <option value="Kech">Kech</option>
                              <option value="Kharan">Kharan</option>
                              <option value="Khuzdar">Khuzdar</option>
                              <option value="Killa Abdullah">
                                Killa Abdullah
                              </option>
                              <option value="Killa Saifullah">
                                Killa Saifullah
                              </option>
                              <option value="Kohlu">Kohlu</option>
                              <option value="Lasbela">Lasbela</option>
                              <option value="Lehri">Lehri</option>
                              <option value="Loralai">Loralai</option>
                              <option value="Mastung">Mastung</option>
                              <option value="Musakhel">Musakhel</option>
                              <option value="Nasirabad">Nasirabad</option>
                              <option value="Nushki">Nushki</option>
                              <option value="Panjgur">Panjgur</option>
                              <option value="Pishin Valley">
                                Pishin Valley
                              </option>
                              <option value="Quetta">Quetta</option>
                              <option value="Sherani">Sherani</option>
                              <option value="Sibi">Sibi</option>
                              <option value="Sohbatpur">Sohbatpur</option>
                              <option value="Washuk">Washuk</option>
                              <option value="Zhob">Zhob</option>
                              <option value="Ziarat">Ziarat</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="service-fields mb-3">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label>
                              Description <span className="text-danger">*</span>
                            </label>
                            <textarea
                              id="about"
                              className="form-control service-desc"
                              name="about"
                              defaultValue={""}
                              onChange={handleDescription}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="service-fields mb-3">
                      <div className="row">
                        <div className="col-lg-8">
                          <div className="service-upload">
                            <i className="fas fa-cloud-upload-alt" />
                            <span>Upload Your Image</span>
                            <FileUploader
                              accept="image/*"
                              name="avatar"
                              randomizeFilename
                              storageRef={storage.ref("images")}
                              onUploadStart={handleUploadStart}
                              // onUploadError={this.handleUploadError}
                              onUploadSuccess={handleUploadSuccess}
                              onProgress={handleProgress}
                            />
                          </div>
                          <div className="progress">
                            <div
                              className="progress-bar bg-info"
                              role="progressbar"
                              style={{ width: `${progress}%` }}
                              aria-valuenow={progress}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                        <div className="col-lg-4" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                          <div id="uploadPreview">
                            <ul
                              className="upload-wrap"
                              style={{ justifyContent: "center" }}
                            >
                              <li>
                                <div className="upload-images">
                                  {/* <img alt="Blog Image" src={imageUrl} /> */}
                                  <ProfileImage imageUrl={imageUrl} />
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="submit-section">
                      <button
                        className="btn btn-primary submit-btn"
                        type="submit"
                        name="form_submit"
                        value="submit"
                      >
                        Continue
                      </button>
                    </div>
                  </form>
                  {/* /Add Blog */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddInfoPersonal;
