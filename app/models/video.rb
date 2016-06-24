class Video < ActiveRecord::Base
	validates_presence_of :title, :url

	def signed_url_for
		presigner.presigned_url(:get_object, bucket: 'capcovideos', key: url, expires_in: 30.seconds)
	end

	private

	def presigner
		@presigner ||= Aws::S3::Presigner.new
	end
end
