require 'test_helper'

class UsersControllerTest < ActionDispatch::IntegrationTest
  test "should get username:string" do
    get users_username:string_url
    assert_response :success
  end

end
