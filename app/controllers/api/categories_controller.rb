class Api::CategoriesController < ApplicationController
  def index
    @categories = Category.all
    render :index
  end

  def show
    @category = Category.find(params[:id])
    render :show
  end

  def create
    @category = Category.new(category_params)
  end

  def category_params
    params.require(:category).permit(:name, :project_id)
  end
end
