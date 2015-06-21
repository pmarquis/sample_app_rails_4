require 'spec_helper'

describe ChartController do

  describe "GET 'index'" do
    it "returns http success" do
      get 'index'
      response.should be_success
    end
  end

  describe "GET 'get_data'" do
    it "returns http success" do
      get 'get_data'
      response.should be_success
    end
  end

end
