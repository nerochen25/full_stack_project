json.extract! user, :id, :email_address, :username
json.projectProposalIds user.project_proposals.ids
json.supportProjectIds user.supporting_projects.ids
