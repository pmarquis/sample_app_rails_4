class ChartController < ApplicationController

  def index ( number="" )
    if number == 1
      render 'chart1'
    end
    # @graph_name = "graph" + number
    render 'index'
  end

  def get_data
    json_data = '{"data":[[{"x":"January  ","y":1036},{"x":"February ","y":533},{"x":"March    ","y":412},{"x":"April    ","y":123},{"x":"May      ","y":3},{"x":"June     ","y":1155},{"x":"July     ","y":0},{"x":"August   ","y":0},{"x":"September","y":0},{"x":"October  ","y":0},{"x":"November ","y":0},{"x":"December ","y":0}],[{"x":"January  ","y":640},{"x":"February ","y":461},{"x":"March    ","y":332},{"x":"April    ","y":242},{"x":"May      ","y":34},{"x":"June     ","y":783},{"x":"July     ","y":0},{"x":"August   ","y":0},{"x":"September","y":0},{"x":"October  ","y":0},{"x":"November ","y":0},{"x":"December ","y":0}],[{"x":"January  ","y":0},{"x":"February ","y":0},{"x":"March    ","y":0},{"x":"April    ","y":0},{"x":"May      ","y":0},{"x":"June     ","y":0},{"x":"July     ","y":0},{"x":"August   ","y":0},{"x":"September","y":0},{"x":"October  ","y":0},{"x":"November ","y":0},{"x":"December ","y":0}]],"graphName":"Monthly Total KM for 2015","total_ukm":3262,"total_redkm":2492,"total_rdrkm":0}';
    render json: json_data
  end

  # def get_data
  #   respond_to do |format|
  #     format.json {}
  #   end
  # end
  
end
