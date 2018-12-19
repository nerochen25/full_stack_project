class RemoveProjectId < ActiveRecord::Migration[5.2]
  def change
    remove_column :categories, :project_id
  end
end
