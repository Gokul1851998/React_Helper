import React from 'react';
import {
  Avatar,
  AvatarGroup,
  Badge,
  Stack,
  Typography,
  Paper,
  Box,
  styled,
} from '@mui/material';
import { useUsersQuery } from '../../../api/useApiData';

// Styled online green badge
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#10b981',
    color: '#10b981',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': { transform: 'scale(.8)', opacity: 1 },
    '100%': { transform: 'scale(2.4)', opacity: 0 },
  },
}));

export default function MuiAvatarDemo() {
  const { data: users = [] } = useUsersQuery();

  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-slate-900">Material UI Avatars & Badges</h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200">
              @mui/material Avatars
            </span>
          </div>
          <p className="text-slate-500 text-sm mt-1">
            Grouped avatars, pulsing online status indicators, and notification badges using DummyJSON user profiles.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        {/* AvatarGroup */}
        <Paper elevation={0} sx={{ p: 4, borderRadius: 4, border: '1px solid #e2e8f0' }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#1e293b' }}>
            AvatarGroup with Overflow Count
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            <AvatarGroup max={6} total={users.length || 30}>
              {users.slice(0, 8).map((u) => (
                <Avatar key={u.id} alt={u.firstName} src={u.image} />
              ))}
            </AvatarGroup>
            <Typography variant="caption" color="text.secondary">
              Over {users.length} active cluster contributors
            </Typography>
          </Box>
        </Paper>

        {/* Pulsing Status Badges */}
        <Paper elevation={0} sx={{ p: 4, borderRadius: 4, border: '1px solid #e2e8f0' }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#1e293b' }}>
            Active Presence Status Badges
          </Typography>
          <Stack direction="row" spacing={3} alignItems="center">
            {users.slice(0, 4).map((u) => (
              <Stack key={u.id} alignItems="center" spacing={1}>
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  variant="dot"
                >
                  <Avatar alt={u.firstName} src={u.image} sx={{ width: 52, height: 52 }} />
                </StyledBadge>
                <Typography variant="caption" sx={{ fontWeight: 600 }}>
                  {u.firstName}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Paper>
      </div>
    </div>
  );
}
