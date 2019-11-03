# class ImageUploader < CarrierWave::Uploader::Base
#   include CarrierWave::MiniMagick

#   storage :file

#   def store_dir
#     "uploads/account/images/#{model.id}"
#   end

#   def extension_whitelist
#     %w(jpg jpeg png)
#   end

#   def default_url(*args)
#     ActionController::Base.helpers.asset_path("fallback/" + [version_name, "default.png"].compact.join('_'))
#   end

#   process resize_to_fit: [500, 300]

#   version :thumb do
#     process resize_to_fill: [80, 60]
#   end

#   def filename
#     model.id.to_s + '_' + original_filename if original_filename
#   end
# end
