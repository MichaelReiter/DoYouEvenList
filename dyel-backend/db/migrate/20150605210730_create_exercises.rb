class CreateExercises < ActiveRecord::Migration
  def change
    create_table :exercises do |t|
      t.string :name
      t.string :weight
      t.string :sets
      t.string :reps
      t.string :units

      t.timestamps
    end
  end
end
