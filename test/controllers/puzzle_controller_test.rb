require 'test_helper'

class PuzzleControllerTest < ActionDispatch::IntegrationTest
  test "should get home" do
    get puzzle_home_url
    assert_response :success
  end

end
