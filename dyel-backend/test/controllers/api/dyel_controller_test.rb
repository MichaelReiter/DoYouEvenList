require 'test_helper'

class Api::DyelControllerTest < ActionController::TestCase
  test "should get all" do
    get :all
    assert_response :success
  end

end
