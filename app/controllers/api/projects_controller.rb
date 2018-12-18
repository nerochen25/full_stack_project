class Api::ProjectsController < ApplicationController
  def index
    # @projects = Project.all.includes(:creator, :category) //after creating category table
    @projects = Project.all.includes(:creator)

    render :index
  end

  def show
    @project = Project.find(params[:id])
    render :show
  end

  def create
    @project = Project.new(project_params)
    @project.creator_id = current_user.id

    if @project.save
      render :show
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def edit
    render :edit
  end

  def update
    # project_proposals comes from user.rb
    @project = current_user.project_proposals.find(params[:id])

    if @project.update(project_params)
      render :show
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def destroy
    # project_proposals comes from user.rb
    @project = current_user.project_proposals.find(params[:id])
    @project.destroy
    render json: @project.id
  end

  private
  def project_params
    params.require(:project).permit(:title, :description, :creator_id, :category_id, :funding_goal, :due_date)
  end
end
