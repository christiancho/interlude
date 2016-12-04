require 'test_helper'

class UserControllerTest < ActionDispatch::IntegrationTest
  test "should get username:string" do
    get user_username:string_url
    assert_response :success
  end

  test "should get email:string" do
    get user_email:string_url
    assert_response :success
  end

  test "should get f_name:string" do
    get user_f_name:string_url
    assert_response :success
  end

  test "should get l_name:string" do
    get user_l_name:string_url
    assert_response :success
  end

  test "should get password_digest:string" do
    get user_password_digest:string_url
    assert_response :success
  end

end
