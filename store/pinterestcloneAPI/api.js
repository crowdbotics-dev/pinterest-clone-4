import axios from "axios"
const pinterestcloneAPI = axios.create({
  baseURL: "https://pinterest-clone-4.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return pinterestcloneAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_analytics_list(payload) {
  return pinterestcloneAPI.get(`/api/v1/analytics/`)
}
function api_v1_analytics_create(payload) {
  return pinterestcloneAPI.post(`/api/v1/analytics/`, payload)
}
function api_v1_analytics_retrieve(payload) {
  return pinterestcloneAPI.get(`/api/v1/analytics/${payload.id}/`)
}
function api_v1_analytics_update(payload) {
  return pinterestcloneAPI.put(`/api/v1/analytics/${payload.id}/`, payload)
}
function api_v1_analytics_partial_update(payload) {
  return pinterestcloneAPI.patch(`/api/v1/analytics/${payload.id}/`, payload)
}
function api_v1_analytics_destroy(payload) {
  return pinterestcloneAPI.delete(`/api/v1/analytics/${payload.id}/`)
}
function api_v1_board_list(payload) {
  return pinterestcloneAPI.get(`/api/v1/board/`)
}
function api_v1_board_create(payload) {
  return pinterestcloneAPI.post(`/api/v1/board/`, payload)
}
function api_v1_board_retrieve(payload) {
  return pinterestcloneAPI.get(`/api/v1/board/${payload.id}/`)
}
function api_v1_board_update(payload) {
  return pinterestcloneAPI.put(`/api/v1/board/${payload.id}/`, payload)
}
function api_v1_board_partial_update(payload) {
  return pinterestcloneAPI.patch(`/api/v1/board/${payload.id}/`, payload)
}
function api_v1_board_destroy(payload) {
  return pinterestcloneAPI.delete(`/api/v1/board/${payload.id}/`)
}
function api_v1_contentmoderation_list(payload) {
  return pinterestcloneAPI.get(`/api/v1/contentmoderation/`)
}
function api_v1_contentmoderation_create(payload) {
  return pinterestcloneAPI.post(`/api/v1/contentmoderation/`, payload)
}
function api_v1_contentmoderation_retrieve(payload) {
  return pinterestcloneAPI.get(`/api/v1/contentmoderation/${payload.id}/`)
}
function api_v1_contentmoderation_update(payload) {
  return pinterestcloneAPI.put(
    `/api/v1/contentmoderation/${payload.id}/`,
    payload
  )
}
function api_v1_contentmoderation_partial_update(payload) {
  return pinterestcloneAPI.patch(
    `/api/v1/contentmoderation/${payload.id}/`,
    payload
  )
}
function api_v1_contentmoderation_destroy(payload) {
  return pinterestcloneAPI.delete(`/api/v1/contentmoderation/${payload.id}/`)
}
function api_v1_like_list(payload) {
  return pinterestcloneAPI.get(`/api/v1/like/`)
}
function api_v1_like_create(payload) {
  return pinterestcloneAPI.post(`/api/v1/like/`, payload)
}
function api_v1_like_retrieve(payload) {
  return pinterestcloneAPI.get(`/api/v1/like/${payload.id}/`)
}
function api_v1_like_update(payload) {
  return pinterestcloneAPI.put(`/api/v1/like/${payload.id}/`, payload)
}
function api_v1_like_partial_update(payload) {
  return pinterestcloneAPI.patch(`/api/v1/like/${payload.id}/`, payload)
}
function api_v1_like_destroy(payload) {
  return pinterestcloneAPI.delete(`/api/v1/like/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return pinterestcloneAPI.post(`/api/v1/login/`, payload)
}
function api_v1_notification_list(payload) {
  return pinterestcloneAPI.get(`/api/v1/notification/`)
}
function api_v1_notification_create(payload) {
  return pinterestcloneAPI.post(`/api/v1/notification/`, payload)
}
function api_v1_notification_retrieve(payload) {
  return pinterestcloneAPI.get(`/api/v1/notification/${payload.id}/`)
}
function api_v1_notification_update(payload) {
  return pinterestcloneAPI.put(`/api/v1/notification/${payload.id}/`, payload)
}
function api_v1_notification_partial_update(payload) {
  return pinterestcloneAPI.patch(`/api/v1/notification/${payload.id}/`, payload)
}
function api_v1_notification_destroy(payload) {
  return pinterestcloneAPI.delete(`/api/v1/notification/${payload.id}/`)
}
function api_v1_pin_list(payload) {
  return pinterestcloneAPI.get(`/api/v1/pin/`)
}
function api_v1_pin_create(payload) {
  return pinterestcloneAPI.post(`/api/v1/pin/`, payload)
}
function api_v1_pin_retrieve(payload) {
  return pinterestcloneAPI.get(`/api/v1/pin/${payload.id}/`)
}
function api_v1_pin_update(payload) {
  return pinterestcloneAPI.put(`/api/v1/pin/${payload.id}/`, payload)
}
function api_v1_pin_partial_update(payload) {
  return pinterestcloneAPI.patch(`/api/v1/pin/${payload.id}/`, payload)
}
function api_v1_pin_destroy(payload) {
  return pinterestcloneAPI.delete(`/api/v1/pin/${payload.id}/`)
}
function api_v1_repin_list(payload) {
  return pinterestcloneAPI.get(`/api/v1/repin/`)
}
function api_v1_repin_create(payload) {
  return pinterestcloneAPI.post(`/api/v1/repin/`, payload)
}
function api_v1_repin_retrieve(payload) {
  return pinterestcloneAPI.get(`/api/v1/repin/${payload.id}/`)
}
function api_v1_repin_update(payload) {
  return pinterestcloneAPI.put(`/api/v1/repin/${payload.id}/`, payload)
}
function api_v1_repin_partial_update(payload) {
  return pinterestcloneAPI.patch(`/api/v1/repin/${payload.id}/`, payload)
}
function api_v1_repin_destroy(payload) {
  return pinterestcloneAPI.delete(`/api/v1/repin/${payload.id}/`)
}
function api_v1_signup_create(payload) {
  return pinterestcloneAPI.post(`/api/v1/signup/`, payload)
}
function api_v1_user_list(payload) {
  return pinterestcloneAPI.get(`/api/v1/user/`)
}
function api_v1_user_create(payload) {
  return pinterestcloneAPI.post(`/api/v1/user/`, payload)
}
function api_v1_user_retrieve(payload) {
  return pinterestcloneAPI.get(`/api/v1/user/${payload.id}/`)
}
function api_v1_user_update(payload) {
  return pinterestcloneAPI.put(`/api/v1/user/${payload.id}/`, payload)
}
function api_v1_user_partial_update(payload) {
  return pinterestcloneAPI.patch(`/api/v1/user/${payload.id}/`, payload)
}
function api_v1_user_destroy(payload) {
  return pinterestcloneAPI.delete(`/api/v1/user/${payload.id}/`)
}
function api_v1_userprofile_list(payload) {
  return pinterestcloneAPI.get(`/api/v1/userprofile/`)
}
function api_v1_userprofile_create(payload) {
  return pinterestcloneAPI.post(`/api/v1/userprofile/`, payload)
}
function api_v1_userprofile_retrieve(payload) {
  return pinterestcloneAPI.get(`/api/v1/userprofile/${payload.id}/`)
}
function api_v1_userprofile_update(payload) {
  return pinterestcloneAPI.put(`/api/v1/userprofile/${payload.id}/`, payload)
}
function api_v1_userprofile_partial_update(payload) {
  return pinterestcloneAPI.patch(`/api/v1/userprofile/${payload.id}/`, payload)
}
function api_v1_userprofile_destroy(payload) {
  return pinterestcloneAPI.delete(`/api/v1/userprofile/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return pinterestcloneAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return pinterestcloneAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return pinterestcloneAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return pinterestcloneAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return pinterestcloneAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return pinterestcloneAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return pinterestcloneAPI.post(
    `/rest-auth/registration/resend-email/`,
    payload
  )
}
function rest_auth_registration_verify_email_create(payload) {
  return pinterestcloneAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload
  )
}
function rest_auth_user_retrieve(payload) {
  return pinterestcloneAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return pinterestcloneAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return pinterestcloneAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_analytics_list,
  api_v1_analytics_create,
  api_v1_analytics_retrieve,
  api_v1_analytics_update,
  api_v1_analytics_partial_update,
  api_v1_analytics_destroy,
  api_v1_board_list,
  api_v1_board_create,
  api_v1_board_retrieve,
  api_v1_board_update,
  api_v1_board_partial_update,
  api_v1_board_destroy,
  api_v1_contentmoderation_list,
  api_v1_contentmoderation_create,
  api_v1_contentmoderation_retrieve,
  api_v1_contentmoderation_update,
  api_v1_contentmoderation_partial_update,
  api_v1_contentmoderation_destroy,
  api_v1_like_list,
  api_v1_like_create,
  api_v1_like_retrieve,
  api_v1_like_update,
  api_v1_like_partial_update,
  api_v1_like_destroy,
  api_v1_login_create,
  api_v1_notification_list,
  api_v1_notification_create,
  api_v1_notification_retrieve,
  api_v1_notification_update,
  api_v1_notification_partial_update,
  api_v1_notification_destroy,
  api_v1_pin_list,
  api_v1_pin_create,
  api_v1_pin_retrieve,
  api_v1_pin_update,
  api_v1_pin_partial_update,
  api_v1_pin_destroy,
  api_v1_repin_list,
  api_v1_repin_create,
  api_v1_repin_retrieve,
  api_v1_repin_update,
  api_v1_repin_partial_update,
  api_v1_repin_destroy,
  api_v1_signup_create,
  api_v1_user_list,
  api_v1_user_create,
  api_v1_user_retrieve,
  api_v1_user_update,
  api_v1_user_partial_update,
  api_v1_user_destroy,
  api_v1_userprofile_list,
  api_v1_userprofile_create,
  api_v1_userprofile_retrieve,
  api_v1_userprofile_update,
  api_v1_userprofile_partial_update,
  api_v1_userprofile_destroy,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
