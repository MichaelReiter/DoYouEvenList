module Api
	class DyelController < ApplicationController
	  
	  respond_to :json

	  def all
	  	render json: Exercise.all
	  end

	  def default_serializer_options
	  	{root: false}
	  end

	end
end