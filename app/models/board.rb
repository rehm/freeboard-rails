class Board < ActiveRecord::Base
	serialize :field, JSON
end
