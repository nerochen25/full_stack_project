class Api::PledgesController < ApplicationController
    def index
      @pledges = Pledge.all
    end
  
    def show
      render :show
    end
  
    def create
      @pledge = Pledge.new(pledge_params)
  
      if @pledge.save
        render :show
      else
        render json: @pledge.errors.full_messages, status: 422
      end
    end
  
    def edit
      render :edit
    end
  
    def update
      @pledge = current_user.pledges.find(params[:id])
  
      if @pledge.update(pledge_params)
        render :show
      else
        render json: @pledge.errors.full_messages, status: 422
      end
    end
  
    def destroy
      pledge = current_user.pledges.find(params[:id])
      pledge.destroy
    end
  
    def pledge_params
      params.require(:pledge).permit(:amount, :supporter_id, :project_id, :reward_id)
    end
  end