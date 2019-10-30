module ExtensionHelpers
  def extension_build_tooltip_text(build, version:)
    {
      passed: "The extension officially supports Solidus #{version} and the test suite is passing!",
      failed: "The extension officially supports Solidus #{version}, but the test suite is currently failing.",
      unsupported: "We cannot determine if the extension currently supports Solidus #{version}.",
      pending: "The extension's tests for Solidus #{version} are currently pending execution.",
    }[build[:status]]
  end

  def extension_build_badge_class(build)
    {
      passed: 'badge badge-success',
      failed: 'badge badge-warning',
      unsupported: 'badge badge-secondary',
      pending: 'badge badge-secondary',
    }[build[:status]]
  end

  def group_extensions(extensions)
    extensions.group_by(&:group).sort_by { |group_name, _| group_name }.to_h
  end
end
