class ExerciseSerializer < ActiveModel::Serializer
  attributes :id, :name, :weight, :sets, :reps, :units
end
