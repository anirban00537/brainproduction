import axios from "axios";

//Tagline
const Taglineurl = "https://immense-lake-23867.herokuapp.com/tagline";
export const fetchTagline = () => axios.get(Taglineurl);
export const updatePost = (updatedPost) => axios.patch(Taglineurl, updatedPost);
export const createTagline = (Post) => axios.post(Taglineurl, Post);

//Intro
const Introurl = "https://immense-lake-23867.herokuapp.com/intro";
export const fetchIntro = () => axios.get(Introurl);
export const updateIntroPost = (updatedPost) =>
  axios.patch(Introurl, updatedPost);
export const createIntro = (Post) => axios.post(Introurl, Post);

//Stage
const Stageurl = "https://immense-lake-23867.herokuapp.com/stage";
export const fetchStage = () => axios.get(Stageurl);
export const updateStagePost = (updatedPost) =>
  axios.patch(Stageurl, updatedPost);
export const createStage = (Post) => axios.post(Stageurl, Post);

//Details
const Detailsurl = "https://immense-lake-23867.herokuapp.com/details";
export const fetchDetails = () => axios.get(Detailsurl);
export const updateDetailsPost = (updatedPost) =>
  axios.patch(Detailsurl, updatedPost);
export const createDetails = (Post) => axios.post(Detailsurl, Post);

//Service
const Serviceurl = "https://immense-lake-23867.herokuapp.com/service";
export const fetchService = () => axios.get(Serviceurl);
export const deleteService = (id) => axios.delete(`${Serviceurl}/${id}`);
export const createSerice = (servicePost) =>
  axios.post(Serviceurl, servicePost);

//Portfolio
const Portfoliourl = "https://immense-lake-23867.herokuapp.com/portfolio";
export const fetchPortfolio = () => axios.get(Portfoliourl);

export const createPortfolio = (Post) => axios.post(Portfoliourl, Post);
export const deletePortfolio = (id) => axios.delete(`${Portfoliourl}/${id}`);

//Team
const Teamurl = "https://immense-lake-23867.herokuapp.com/team";
export const fetchTeam = () => axios.get(Teamurl);
export const deleteTeam = (id) => axios.delete(`${Teamurl}/${id}`);
export const createTeam = (TeamPost) => axios.post(Teamurl, TeamPost);

//About
const Abouturl = "https://immense-lake-23867.herokuapp.com/about";
export const fetchAbout = () => axios.get(Abouturl);
export const updateAboutPost = (updatedPost) =>
  axios.patch(Abouturl, updatedPost);
export const createAbout = (Post) => axios.post(Abouturl, Post);

//Contact
const Contacturl = "https://immense-lake-23867.herokuapp.com/contact";
export const fetchContact = () => axios.get(Contacturl);
export const updateContactPost = (updatedPost) =>
  axios.patch(Contacturl, updatedPost);
export const createContact = (TeamPost) => axios.post(Contacturl, TeamPost);

//CustomerContact
const CustomerContacturl =
  "https://immense-lake-23867.herokuapp.com/customercontact";
export const fetchCustomerContact = () => axios.get(CustomerContacturl);
export const createCustomerContact = (Post) =>
  axios.post(CustomerContacturl, Post);

//Auth

const signinurl = "https://immense-lake-23867.herokuapp.com/signin";
const signupurl = "https://immense-lake-23867.herokuapp.com/signup";

export const signin = (info) => axios.post(signinurl, info);
export const signup = (info) => axios.post(signupurl, info);
